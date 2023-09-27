import React from 'react';

const ThemeContext = React.createContext()
const ThemeProvider = (props) =>{
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light")
        }
    }

    const initalState = {
        theme, toggleTheme,
    }
    
    return (
        <React.Fragment>
          <ThemeContext.Provider value={initialState}>
            {props.children}
          </ThemeContext.Provider>
        </React.Fragment>
    )
}

export {ThemeProvider,ThemeContext}
