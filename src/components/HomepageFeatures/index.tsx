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
    title: <Translate>Comprehensive</Translate>,
    Svg: require('@site/static/img/data.svg').default,
    description: (
      <Translate>
       Common Data Index is the largest source of data catalogs and datasets around the world.
      </Translate>
    ),
  },
  {
    title: <Translate>Documented</Translate>,
    Svg: require('@site/static/img/preservation.svg').default,
    description: (
      <Translate>
        Knowledge base with project provide detailed information about how to find datasets, how data catalogs work.
      </Translate>
    ),
  },
  {
    title: <Translate>Open source</Translate>,
    Svg: require('@site/static/img/osi.svg').default,
    description: (
      <Translate>
        Most of Common Data Index source code is open and 
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
