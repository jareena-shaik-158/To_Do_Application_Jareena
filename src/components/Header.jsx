import './Header.css';
function Header({ openModal }) {
    return (
        <header className="header">
            <h1>To-Do List</h1>
            <button className="add-btn" onClick={openModal}>+</button>
        </header>
    );
}

export default Header;
