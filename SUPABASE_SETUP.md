# Supabase setup

1. Create/open your Supabase project.
2. Enable Email authentication.
3. Put the project URL and the **anon/publishable key only** in Gradle properties or `.env` as `SUPABASE_URL` and `SUPABASE_ANON_KEY`. Never put a service-role key in the APK.
4. Add a `profiles` table keyed by `auth.users.id` with RLS before storing production profile data.
5. Enable the required email verification/redirect settings.

This build uses Supabase Auth REST for real sign-up/sign-in. Existing screens still contain local sample exam data; those must be migrated to Supabase tables before production.
