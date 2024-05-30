import PropTypes from 'prop-types';
import style from './SerchBar.module.css';

export default function SearchBar({ onSubmit }) {
    return (
        <form onSubmit={onSubmit} className={style.form}>
            <input className="inputSet"type="text" name='movieName' placeholder='Enter the title to search' autoComplete="off" autoFocus pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" className={style.input}/>
            <button type='submit' className={style.btn}>Search</button>
        </form>
    )
}

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired
};