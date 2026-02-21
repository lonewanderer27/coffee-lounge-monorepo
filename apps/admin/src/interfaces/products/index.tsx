import { Database } from "@coffee-lounge-monorepo/shared-types/src/types/database.gen";

type IProduct = Database["public"]["Tables"]["product"]["Row"];

export default IProduct;