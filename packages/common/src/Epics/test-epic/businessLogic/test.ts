import { useDispatch, useSelector } from 'react-redux';
import { selectData, selectLoading, selectError } from '../redux/slice';

const usePerson = () => {
  const dispatch = useDispatch<any>();
  const data = useSelector(selectData);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const getName = () => {
    return data?.firstName
  }

  return { data, loading, error, getName };
};


export default usePerson