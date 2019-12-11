import Link from "next/link";
import Header from "../components/Header";
import Layout from "../components/Layout";

const PostLink = props => (
  <li>
    <Link href="/books/[id]" as={`/books/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

export default function Index() {
  return (
    <div>
      <Layout>
        <p>Hello Next.js</p>
        {/* Proposer les titres issues de la bdd : Top Lecture - Top Ecriture - Top Jugement grace a 3 components <TopLire/> <TopEcrire/> <TopJugement/> */}
        {/*
            <TopLire />
            <TopEcrire />
            <TopJugement />
        */}
        <ul>
          <PostLink id="lechou" title="La magnifique histoire du Chou Bleu" />
          <PostLink
            id="boblenain"
            title="L'epopee de Bob le Nain parmi les nains dans les meandres de la fête foraine."
          />
          <PostLink id="willycoconuts" title="Si petit dans l'Espace..." />
        </ul>
      </Layout>
    </div>
  );
}
