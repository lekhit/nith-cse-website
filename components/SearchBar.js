import { Container, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar(props) {
    const {allStudentData, studentData, setstudentData } = props;
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (e) => {
        const newSearchTerm = e.target.value;
        setSearchTerm(newSearchTerm);

        if (allStudentData.length > 0) {
            const newData = allStudentData.filter((data) => {
                return (
                    data.name.toLowerCase().includes(newSearchTerm.toLowerCase()) ||
                    data.rollno.toLowerCase().includes(newSearchTerm.toLowerCase())
                );
            });
            setstudentData(newData);
        }
    };


    return (
        <Container maxWidth="md" style={{ textAlign: 'center' }}>
            <TextField
                id="search"
                type="search"
                label="Search"
                value={searchTerm}
                onChange={handleChange}
                sx={{ width: 600 }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="center">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
        </Container>
    );
}