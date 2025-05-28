
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { type, data } = await req.json()
    
    let subject = ''
    let html = ''
    
    if (type === 'contact') {
      subject = `Neue RSVP von ${data.name}`
      html = `
        <h2>Neue Kontaktdaten eingegangen</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>E-Mail:</strong> ${data.email}</p>
        <p><strong>Telefon:</strong> ${data.phone || 'Nicht angegeben'}</p>
        <p><strong>Teilnahme:</strong> ${data.attending}</p>
        <p><strong>Zeit:</strong> ${new Date(data.created_at).toLocaleString('de-DE')}</p>
      `
    } else if (type === 'music') {
      subject = 'Neuer Musikwunsch'
      html = `
        <h2>Neuer Musikwunsch eingegangen</h2>
        <p><strong>Musikwunsch:</strong> ${data.music_wish}</p>
        <p><strong>Zeit:</strong> ${new Date(data.created_at).toLocaleString('de-DE')}</p>
      `
    } else if (type === 'attributes') {
      subject = 'Neue Ricardo-Attribute'
      html = `
        <h2>Neue Ricardo-Attribute eingegangen</h2>
        <p><strong>E-Mail:</strong> ${data.email}</p>
        <p><strong>Attribut 1:</strong> ${data.attribute1}</p>
        <p><strong>Attribut 2:</strong> ${data.attribute2}</p>
        <p><strong>Attribut 3:</strong> ${data.attribute3}</p>
        <p><strong>Zeit:</strong> ${new Date(data.created_at).toLocaleString('de-DE')}</p>
      `
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Mallorca Party <noreply@lovable.app>',
        to: ['barbara.diaz@gmx.de', 'ricardo.diaz-rohr@gmx.net'],
        subject: subject,
        html: html,
      }),
    })

    const result = await res.json()
    
    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}
