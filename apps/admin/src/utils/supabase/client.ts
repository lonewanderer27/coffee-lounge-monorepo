import { createBrowserClient } from "@supabase/ssr";
import { Database } from "@coffee-lounge-monorepo/shared-types/src/types/database.gen";

export const supabaseBrowserClient = createBrowserClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
  {
    db: {
      schema: "public",
    },
  },
);
