## React Notes

### Components

- **Class Components**
- **Function Components**

### Props

- Used to pass data from one component to another.
- Never mutate props or state directly.

### Styling

- Use `className` for CSS classes.
- Inline styling uses camelCase (preferred for dynamic styles).
- Stick to one styling approach.
- Consider using Tailwind CSS for utility-first styling.

### State and Hooks

- Use `useState` to manage component state:
    ```js
    const [hasLiked, setHasLiked] = useState(false);
    ```
- State is **not persistent** on page reload.
- Example of updating state based on previous value:
    ```js
    const [count, setCount] = useState(0);
    setCount((prevState) => prevState + 1);
    ```

### useEffect Hook

- Use `useEffect` to fetch data from a server or perform side effects.
- The dependency array tracks which values trigger the effect.
- Multiple `useEffect` hooks can be used in a component.
- Cleanup can be performed by returning a callback function from `useEffect`.

### Conditional Rendering

- Display UI based on certain criteria.
- Example: Show different components or messages depending on state.

### Example: Search Component

```jsx
<input
    type="text"
    placeholder="search"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
/>
```

---

**Tips:**
- Never mutate props or state directly.
- Organize components (e.g., Search) for better project structure.
- Practice with small projects like a movie search app.