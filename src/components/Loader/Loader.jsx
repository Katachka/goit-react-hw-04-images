import { Dna } from 'react-loader-spinner';
import { Spinner } from './Loader.styled';


export const Loader = () => {
  return (
    <Spinner >
     <Dna
        visible={true}
        height="100"
        width="100"
        ariaLabel="dna-loading"

/>
    </Spinner>
  );
};
