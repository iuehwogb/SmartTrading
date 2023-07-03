import React from 'react'
import S2 from "./Section.module.css"
import Se2 from "../../../image/JPG/Se2.jpg"

const Section2 = () => {
  return (
      <section className={S2.HomePsection} name="section2">
      <div className={S2.right}>
        <img className={S2.rightImg} src={Se2} alt="" />
        </div>
        <div className={S2.left}>
						<h1>Почему выбирают этот курсы?</h1>
            <div className="text">
						<h5><span>Мы обучаем по концепции Smart money:
            <ol>
              <li className={S2.li}><span className={S2.span}>Понимание логики рынка: </span> Наша концепция Smart Money поможет вам разобраться в тонкостях рынка и научиться предугадывать его движения. Вы будете иметь преимущество перед другими трейдерами, благодаря своей способности читать и анализировать поведение крупных участников.</li>
              <li className={S2.li}><span className={S2.span}>Применимость на всех рынках:</span>   Независимо от того, в каком рынке вы заинтересованы - форекс, акции, криптовалюта или товары - концепция Smart Money будет работать везде. Вы сможете использовать ее для достижения успеха в любой торговой области.</li>
              <li className={S2.li}><span className={S2.span}>Профессиональное обучение:</span>  На нашем курсе мы предлагаем профессиональное обучение, основанное на концепции Smart Money. Вы получите доступ к видеоурокам, практическим заданиям и реальным кейсам, чтобы углубить свои знания и навыки торговли.</li>
              <li className={S2.li}><span  className={S2.span}> Экспертная поддержка:</span> Наша команда экспертов всегда готова помочь вам на каждом этапе вашего обучения. Мы предоставляем персональную консультацию и поддержку, чтобы вы могли максимально эффективно использовать концепцию Smart Money и достигнуть своих финансовых целей.</li>
            </ol>
               </span></h5>
            </div>
		    </div>
      </section>
  )
}

export default Section2