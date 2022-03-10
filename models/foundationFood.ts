class FoundationFood {
    fdcId: number;
    name: string;
    protein: object;
    fat: object;
    carbohydrate: object;
    kcal: object;
    constructor(
        fdcId: number,
        name: string,
        protein: object,
        fat: object,
        carbohydrate: object,
        kcal: object
        ) {
        this.fdcId = fdcId;
        this.name = name;
        this.protein = protein;
        this.fat = fat;
        this.carbohydrate = carbohydrate;
        this.kcal = kcal;
    }
}

export default FoundationFood;