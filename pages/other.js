import Link from 'next/link';
import Layout from '../components/Layout';
import Counter from '../components/Counter';

export default () => {
  <Layout header="Other" title="Other page.">
    <Counter />
    <hr />
    <Link href="/">
      <button>&lt;&lt;Bach to Other</button>
    </Link>
  </Layout>;
};
