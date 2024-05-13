import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient(event);
  const { email, password } = await readBody(event);
  const { error } = await supabase.auth.signInWithPassword({
    email: email._value,
    password: password._value,
  });
  if (error) throw error;

  return {};
});
