import Layout1 from '../../masok/Layout/Layout1/Layout1';
import MainContent from '../../masok/Container/MainContent.tsx/MainContent';
import {useRouter} from 'next/router';

export default function Product(){
  const routerLink = useRouter();
  const {category} = routerLink.query;
  return (
    <Layout1>
      <h1>{category}</h1>
      <MainContent        
        id={category}
      />
    </Layout1>
  )
}