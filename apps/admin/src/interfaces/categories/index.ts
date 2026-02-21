import { Database } from "@coffee-lounge-monorepo/shared-types/src/types/database.gen";

type ICategory = Database["public"]["Tables"]["category"]["Row"];

export default ICategory;