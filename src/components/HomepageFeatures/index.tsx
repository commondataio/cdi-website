import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: <Translate>Data catalogs registry</Translate>,
    Svg: require('@site/static/img/data.svg').default,
    description: (
      <Translate>
       Registry of all data catalogs around the world.
      </Translate>
    ),
  },
  {
    title: <Translate>Raw data index</Translate>,
    Svg: require('@site/static/img/preservation.svg').default,
    description: (
      <Translate>
        Database of metadata about every dataset from all data catalogs as it is. Available as datasets and APIs
      </Translate>
    ),
  },
  {
    title: <Translate>Search index</Translate>,
    Svg: require('@site/static/img/osi.svg').default,
    description: (
      <Translate>
        Searchable database of all datasets metadata transformed intro unified search index. Available as API
      </Translate>
    ),
  },
  {
    title: <Translate>Data search engine</Translate>,
    Svg: require('@site/static/img/osi.svg').default,
    description: (
      <Translate>
        Search engine using search index for fast dataset search.
      </Translate>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.feature}>
        {/*<div className="padding-horiz--md">*/}
        <div>
          <Svg className={styles.featureSvg} role="img" />
        </div>
        {/*<div className="padding-horiz--md">*/}
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          {/*<h3><Translate>Russian national digital archive (ruarxive.org)</Translate></h3>*/}
          {/*<p><Translate>Digital born should be digital preserved</Translate></p>*/}
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
