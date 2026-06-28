'use client';

import { fireCustom } from './Analytics';
import styles from './FloatingCta.module.css';

export default function FloatingCta() {
  function handleClick() {
    fireCustom('FloatingCTAClick');
  }

  return (
    <a href="#anunciar" className={styles.floating} onClick={handleClick}>
      Divulgar vaga
    </a>
  );
}
