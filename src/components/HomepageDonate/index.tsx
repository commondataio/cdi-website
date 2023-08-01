import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';
import Donate from '@site/src/components/Donate';

export default function HomepageDonate(): JSX.Element {
  return (
    <section className={styles.donate}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--6')}>
            <h2 className={styles.donateTitle}>
              <Translate>
                Support project
              </Translate>
            </h2>
            <p className={styles.donateSubtitle}>
              <Translate>
                Even a small donation will allow the project to exist longer
              </Translate>
            </p>
          </div>
          <div className={clsx('col col--6')}>
            Donation button will be available soon
          </div>
        </div>
      </div>
    </section>
  );
}
