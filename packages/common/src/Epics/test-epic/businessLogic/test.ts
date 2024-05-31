import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, selectData, selectLoading, selectError } from '../redux/slice';

export const useFetchData = () => {
  const dispatch = useDispatch<any>();
  const data = useSelector(selectData);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const getName = () => {
    return data?.firstName
  }

  return { data, loading, error, getName };
};