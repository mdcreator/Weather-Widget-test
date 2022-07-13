import React from 'react';
import s from './Header.module.css';

export default function Header() {
  return (
    <>
      <h1 className={s.header}>
        Weather <span className={s.light}>Forecast</span>
      </h1>
    </>
  );
}
