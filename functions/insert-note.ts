import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";
Deno.serve(async (req)=>{
  if (req.method === 'OPTIONS') {
    return new Response('ok', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'
      }
    });
  }
  try {
    const supabaseClient = createClient(Deno.env.get('SUPABASE_URL'), Deno.env.get('SUPABASE_SERVICE_ROLE_KEY'));
    const { title, content } = await req.json();
    const { data, error } = await supabaseClient.from('notes').insert([
      {
        title,
        content
      }
    ]);
    if (error) throw error;
    return new Response(JSON.stringify({
      data
    }), {
      headers: {
        'Content-Type': 'application/json',
        'Connection': 'keep-alive',
        'Access-Control-Allow-Origin': '*'
      },
      status: 201
    });
  } catch (error) {
    return new Response(JSON.stringify({
      error: error.message
    }), {
      headers: {
        'Content-Type': 'application/json',
        'Connection': 'keep-alive',
        'Access-Control-Allow-Origin': '*'
      },
      status: 400
    });
  }
}); //     const supabaseClient = createClient(Deno.env.get('SUPABASE_URL'), Deno.env.get('SUPABASE_ANON_KEY'), {
 //       global: {
 //         headers: {
 //           Authorization: req.headers.get('Authorization')
 //         }
 //       }
 //     });
 //     const { data, error } = await supabaseClient.from('notes').select('*');
 //     if (error) throw error;
 //     return new Response(JSON.stringify(data), {
 //       headers: {
 //         'Content-Type': 'application/json',
 //         'Connection': 'keep-alive',
 //         'Access-Control-Allow-Origin': '*'
 //       },
 //       status: 200
 //     });
 //   } catch (error) {
 //     return new Response(JSON.stringify({
 //       error: error.message
 //     }), {
 //       headers: {
 //         'Content-Type': 'application/json',
 //         'Connection': 'keep-alive',
 //         'Access-Control-Allow-Origin': '*'
 //       },
 //       status: 400
 //     });
 //   }
 // });
