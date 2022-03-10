import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Select, MenuItem, TextField, Button } from '@mui/material';
import axios from 'axios';

const API_KEY = 'ZwnNuS9kMyEXhSRNYbFcSYbUeiPr48pCARsWifp2';

interface IQueryParams {
    foodType: string;
    keywords: string;
}

const FoodSearchCard = () => {
    const [queryParams, setQueryParams] = useState<IQueryParams>({ foodType: "Branded", keywords: "" });
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setQueryParams({...queryParams, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.get(
                `https://api.nal.usda.gov/fdc/v1/foods/search?query=${queryParams.keywords}&dataType=${queryParams.foodType}&pageSize=10&pageNumber=1&sortBy=dataType.keyword&sortOrder=asc&api_key=${API_KEY}&requireAllWords=true`
            );
            setSearchResults(response.data.foods);
        } catch (err) {
            setError(err.message || "Unexpected Error!");
            console.log(error);
        }
    }

    useEffect(() => {
        console.log(searchResults);
    }, [searchResults]);

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <InputLabel id="food-type-label">Food Type</InputLabel>
                    <Select
                        labelId="food-type-label"
                        id="food-type"
                        name="foodType"
                        value={queryParams.foodType}
                        label="Food Type"
                        onChange={handleChange}
                        margin="dense"
                    >
                        <MenuItem value={"Branded"}>Branded</MenuItem>
                        <MenuItem value={"Foundation"}>Foundation</MenuItem>
                    </Select>
                    <TextField
                        label="Search Keyword(s)"
                        variant="outlined"
                        name="keywords"
                        value={queryParams.keywords}
                        onChange={handleChange}
                        margin="normal"
                    ></TextField>
                    <Button
                        variant="contained"
                        type="submit"
                    >Search</Button>
                </FormControl>
            </form>
        </React.Fragment>
    );
}

export default FoodSearchCard;