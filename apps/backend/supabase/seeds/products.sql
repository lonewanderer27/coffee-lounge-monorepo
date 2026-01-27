DO $$
DECLARE
    -- Variables to store our generated UUIDs
    v_company_id  UUID;
    v_cat_coffee  INTEGER;
    v_cat_bev     INTEGER;
    v_cat_meals   INTEGER;
    v_cat_snacks  INTEGER;
BEGIN
    -- 1. Create the Company
    INSERT INTO company (name) 
    VALUES ('Coffee Lounge') 
    RETURNING id INTO v_company_id;

    -- 2. Create Categories linked to that Company
    INSERT INTO category (name, company_id) VALUES ('Coffee', v_company_id) RETURNING id INTO v_cat_coffee;
    INSERT INTO category (name, company_id) VALUES ('Beverage', v_company_id) RETURNING id INTO v_cat_bev;
    INSERT INTO category (name, company_id) VALUES ('Meals', v_company_id) RETURNING id INTO v_cat_meals;
    INSERT INTO category (name, company_id) VALUES ('Snacks', v_company_id) RETURNING id INTO v_cat_snacks;

    -- 3. Insert Baked Goods (linked to Meals category)
    INSERT INTO product (name, description, category_type_id)
    VALUES
        ('Pandesal', 'A typical bread ideal for breakfast. Made bigger and fuller with just the right combination of spices, coated with freshly prepared bread crumbs.', v_cat_meals),
        ('Ensaymada', 'Is a soft, sweet dough pastry covered with butter and sugar then topped with lots of grated cheese.', v_cat_meals),
        ('Butter Bun', 'Lean bread coated with bread crumbs, with a slit on top and piped with margarine.', v_cat_meals),
        ('Empanada', 'A baked or fried pastry stuffed with any of a variety of fillings.', v_cat_meals),
        ('Corn Bread', 'A delightful corn shaped bread that is sweet.', v_cat_meals),
        ('Pan-de-Julia', 'Julie''s take on classic pandesal made more special.', v_cat_meals),
        ('Everlasting', 'A lean type of bread with six cuts on the surface forming a flower-like appearance and topped with refined sugar.', v_cat_meals);

    -- 4. Insert Coffees (linked to Coffee category)
    INSERT INTO product (name, category_type_id)
    VALUES
        ('European', v_cat_coffee),
        ('Espresso', v_cat_coffee),
        ('Mocha', v_cat_coffee),
        ('Latteaholic', v_cat_coffee),
        ('Frape', v_cat_coffee),
        ('Cappucino', v_cat_coffee),
        ('Not Macchiato', v_cat_coffee);

    -- 5. Insert Beverages (linked to Beverage category)
    INSERT INTO product (name, category_type_id)
    VALUES ('Hot Chocolate', v_cat_bev);

    -- 6. Insert Appetizing Breakfast Meals (linked to Meals category)
    INSERT INTO product (name, description, category_type_id)
    VALUES 
    (
        'The Brioche Sunrise', 
        'Golden-brown thick-cut French toast dusted with powdered sugar and topped with a melting butter dollop. Served with crispy hickory-smoked bacon, savory sausage links, and two farm-fresh eggs sunny-side up.', 
        v_cat_meals
    ),
    (
        'The Artisan Morning', 
        'A crisp, golden triangular hash brown paired with sautéed herb-infused mushrooms and a grilled tomato. Features a side of artisanal toasted bread with butter, a rolled slice of premium ham, and two perfectly set sunny-side up eggs.', 
        v_cat_meals
    ),
    (
        'The Grand Classic', 
        'A hearty traditional breakfast featuring buttery thick-cut toast, two fried eggs, and plump grilled sausages nestled against savory baked beans. Completed with a side of crispy bacon, grilled tomato, and a touch of fresh greens.', 
        v_cat_meals
    );

    -- Optional: Log success to the console
    RAISE NOTICE 'Successfully created Company % with linked Categories and Products.', v_company_id;

END $$;