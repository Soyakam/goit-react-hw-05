import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieReviews } from '../../Api';
import toast from 'react-hot-toast';
// import { FaUserCircle } from "react-icons/fa";
import style from './MovieReviews.module.css';
import Loader from '../Loader/Loder';

export default function MovieReviews() {
    const [reviewsList, setReviewsList] = useState([]);
    const [loading, setLoading] = useState(false);
    const { movieId } = useParams();

    useEffect(() => {
        const getMovieReviews = async () => {
            try {
                setLoading(true);
                const data = await fetchMovieReviews(movieId);
                setReviewsList(data.results);
            } catch (error) {
                 toast.error("Whoops. Something went wrong! Please try reloading this page!");
            } finally {
                setLoading(false);
            }
        }
        getMovieReviews(movieId);
    }, [movieId]);



    return (
        <main className='container'>
            {loading ? (
                <Loader />
            ) : reviewsList.length > 0 ? (
                <ul>
                    {reviewsList.map(({  content, id }) => (
                        <li key={id} className={style.item}>
                            {/* <p className={style.name}><FaUserCircle className={style.icon} />{author}</p> */}
                            <p className={style.content}>{content}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>We do not have any reviews for this movie yet</p> // Повідомлення, якщо відгуки відсутні
            )}
        </main>
    );
}