import { serve } from "https://deno.land/std@0.114.0/http/server.ts";

async function handleRequest(request) {
  const file = await Deno.readFile("./test.json");
  // Respond to the request with the style.css file.
  return new Response(file, {
    headers: {
      "content-type": "application/json",
    },
  });
}

console.log("Listening on http://localhost:8000");
serve(handleRequest);
