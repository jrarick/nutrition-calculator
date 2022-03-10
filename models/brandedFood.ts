class BrandedFood {
    fdcId: number;
    name: string;
    upc: string;
    brandOwner: string;
    servingSize: number;
    servingSizeUnit: string;
    protein: object;
    fat: object;
    carbohydrate: object;
    kcal: object;
    constructor(
        fdcId: number,
        name: string,
        upc: string,
        brandOwner: string,
        servingSize: number,
        servingSizeUnit: string,
        protein: object,
        fat: object,
        carbohydrate: object,
        kcal: object
        ) {
        this.fdcId = fdcId;
        this.name = name;
        this.upc = upc;
        this.brandOwner = brandOwner;
        this.servingSize = servingSize;
        this.servingSizeUnit = servingSizeUnit;
        this.protein = protein;
        this.fat = fat;
        this.carbohydrate = carbohydrate;
        this.kcal = kcal;
    }
}

export default BrandedFood;