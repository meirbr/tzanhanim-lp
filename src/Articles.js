import { render } from "@testing-library/react"
import React from "react"
import Image from "react-bootstrap/Image"
import Container from "react-bootstrap/Container"
import { Row, Col } from 'reactstrap';
import example from "./assets/img/example.jpg"
import AnimatedPics from './AnimatedPics.tsx'
import { motion } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import CarouselItem from 'react-bootstrap/CarouselItem'
//import { AccordionElement } from "./AccordionElement";
import twicegood from './assets/img/twicegood.jpg'
import gaava from './assets/img/gaava.jpg'


class Articles extends React.Component {
    constructor(){
        super()
        this.state = {
          isHidden: true,
          isScrolled :false
        }
        
    }


    render(){
 
    return (
        <motion.div
          className="section-articles rtl"
          data-background-color="black"
          id="articles-section"
          style={{marginBottom: "60px"}}
          onScroll={this.state.isScrolled = true}

        >
          <Carousel>
  <Carousel.Item style={{height: "80vh", direaction: "rtl"}}>
    <a href="https://www.idf.il/%D7%90%D7%AA%D7%A8%D7%99%D7%9D/%D7%97%D7%98%D7%99%D7%91%D7%AA-%D7%94%D7%A6%D7%A0%D7%97%D7%A0%D7%99%D7%9D/%D7%A4%D7%9C%D7%95%D7%92%D7%94-%D7%97%D7%A8%D7%93%D7%99%D7%AA-%D7%91%D7%A6%D7%A0%D7%97%D7%A0%D7%99%D7%9D-1/">
    <img
      className="d-block w-100"
      src={gaava}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>
      מיוחד: השבוע הראשון של לוחמי הצנחנים החרדים
        </h3>
      <p className="on-pc-display-block">
      אוכלים גלאט כשר, מתפללים 3 פעמים ביום, ומתעלמים מהקללות כשהם חוזרים הביתה על מדים. בחודש שעבר התגייסו הלוחמים החרדים הראשונים בחטיבת הצנחנים. שוחחנו איתם על האתגרים שבדרך, הלבטים, ההתרגשות והגאווה להיות חלק מהחטיבה האדומה. כתבה ראשונה בסדרה
        </p>
    </Carousel.Caption>
    </a>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.globes.co.il/images/NewGlobes/big_image_800/2018/c16_shutter800x392.20181216T154824.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>
      "אני מרגיש גאווה ללכת עם מדים בבני ברק": הצנחנים החרדים נחשפים
        </h3>
      <p className="on-pc-display-inline">
      לפני כשנתיים יצאה לדרך פלוגת "חץ" – הפלוגה החרדית בחטיבת הצנחנים. המפקדים צריכים להתמודד עם מגבלות הכשרות והצניעות שהלוחמים דורשים, והחיילים נאלצים להתמודד עם התנכרות מצד ההורים ואלימות מצד תושבי השכונות בהן הם גרים. כתבתו של רועי שרון
        </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={twicegood}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>
        פעמיים כי טוב
      </h3>
      <p className="on-pc-display-inline">
      בבסיס האימונים של הצנחנים התקיים אתמול טקס ההשבעה לפלוגת ח"ץ (חרדים צנחנים), שבו בלט צמד אחים. בצד המפקדים – סגן אליהו ויצמן, סמ"פ בפלוגה. בצד "הצעירים" – טוראי בניהו ויצמן, שסיים אמש את הטירונות המפרכת. אליהו (22), שלמד במוסדות חרדיים, היה הראשון ממשפחתו שהתגייס לצה"ל. הוא גם הקצין הראשון שיצא מפלוגת ח"ץ. "הייתי במחזור הראשון של פלגות החרדים בצנחנים וראיתי אותה גדלה למה שהיא היום. בחלום הכי גדול שלי לא דמיינתי שאחי הקטן יסיים טירונות בפלוגה שאני מפקד עליה", הוא אומר. "מאז שאליהו התגייס הסתכלתי עליו מהצד וזה מאוד דיבר אליי", מספר בניהו (18), "הוא היה המודל לחיקוי שלי".
        </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </motion.div>
            )
    }
}

export default Articles