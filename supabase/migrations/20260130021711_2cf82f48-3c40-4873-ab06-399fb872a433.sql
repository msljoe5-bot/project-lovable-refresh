-- Create leads_greenodia table for capturing lead information
CREATE TABLE public.leads_greenodia (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT NOT NULL,
  building_type TEXT,
  surface TEXT,
  message TEXT,
  source TEXT DEFAULT 'contact_form',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.leads_greenodia ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts (for lead capture forms)
CREATE POLICY "Allow anonymous insert for lead capture" 
ON public.leads_greenodia 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow reading leads (for admin access later)
CREATE POLICY "Allow authenticated users to read leads" 
ON public.leads_greenodia 
FOR SELECT 
TO authenticated
USING (true);

-- Enable realtime for instant lead notifications
ALTER PUBLICATION supabase_realtime ADD TABLE public.leads_greenodia;

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_leads_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_leads_greenodia_updated_at
BEFORE UPDATE ON public.leads_greenodia
FOR EACH ROW
EXECUTE FUNCTION public.update_leads_updated_at();