import { useTheme } from "../context/ThemeContext";


function Header() {
    const [theme, toggleTheme] = useTheme()

    return (
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: '16px',
            background: theme === "light" ? "white" : "black",
            color: theme === "light" ? "black" : "white"

          }}
        >  
          <h1>Countries App</h1>
          <button onClick={toggleTheme}>
            Switch to {theme === "light"? "Dark" : "Light" } Mode
          </button>
        </header>
    )
}

export default Header