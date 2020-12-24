import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";

function MyAccordion () {
    let styleCard = {
        backgroundColor: "#006947",
        itemsAlign: "center",
        color: "#F2F3F4",
        height: "80px",
        textAlign: "center"
    }
    
return(
  <motion.div
  whileTap={{scale: 1.04}}
  >
    <Accordion className="rtl">
    <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0" style={styleCard} onClick={() => {}}>
      גיבוש
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <motion.div initial={{scale: 0.75}}
      animate={{scale: 1.0}}
      transition={{delay: 0.5}}>
      <Card.Body>
        צריך כאן טקסט
          </Card.Body>
          </motion.div>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="-1" style={styleCard} onClick={() => {}}>
      טירונות
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="-1">
      <motion.div initial={{scale: 0.75}}
      animate={{scale: 1.0}}
      transition={{delay: 0.5}}>
      <Card.Body>
1. לאחר שלב הגיוס החיילים מתחילים את שלב הטירונות בבא"ח (בסיס אימונים חטיבתי) בו הם לומדים את המערכת הצבאית, שימוש במגוון כלי נשק, כושר גופני ועוד. במהלך הטירונות החיילים יעברו טקס השבעה ויהיו זכאים לתג החטיבה שבה הם משרתים. בסיום הטירונות הלוחמים יוסמכו ללוחמים ברמת רובאי 05, ולוחמי מגיני הנגב יוסמכו לרובאי 03.
<br />
2. האימונים בטירונות כוללים:
<br />
-שימוש בכלי נשק שונים - נשק קל, נגב, מאג ורימון יד.
<br />
-עזרה ראשונה - הלוחם יוסמך כמע"ר (מגיש עזרה ראשונה).
<br />
-קורס חובשים קרביים - לאחר מיון והתאמה, מספר הקצאות מוגבל.
<br />
-שימוש במכשירי קשר.
<br />
-התגוננות מאיום אב"כ.
<br />
-אימונים גופניים - בחני ריצה ובוחן מסלול מכשולים.
<br />
-תרגילי פרט בירי-חוליה (תרגולי הסתערות ומטווחים - לבד ובצוות).
<br />
-שדאות.
<br />
-ניווטים ומסעות.
<br />
-לש"ב. (לוחמה בשטח בנוי)
          </Card.Body>
          </motion.div>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1" style={styleCard}>
      אימון מתקדם
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
      1. לאחר סיום הטירונות הלוחמים עוברים לשלב האימון המתקדם שנמשך כ-3 חודשים, בו הם רוכשים מיומנות לחימה אישית גבוהה, כישורי לחימה בשטחים בנויים ומורכבים, לפני סיום שלב האימון המתקדם הלוחמים יבצעו את מסע הכומתה המפורסם, אחריו הלוחמים יהיו זכאים לחבוש את הכומתה של היחידה בה הם נמצאים. לוחמים אשר יוכיחו כישורי פיקוד גבוהים יצאו לקורס מפקדי כיתה בתום ההכשרה. בסיום האימון המתקדם הלוחמים יוסמכו ללוחמים ברמת רובאי 07.
<br />
2. התמחויות באימון מתקדם כוללות:
<br />
-קרב מגע.
<br />
-כיבוש יעד מבוצר.
<br />
-מפקד כיתה - תחילתו של ציר הפיקוד בצה"ל, מתאים לחיילים עם יכולות פיקוד.
<br />
-תרגילי ירי ברמת הכיתה, מחלקה, פלוגה וגדוד.
<br />
-לוחמה מתקדמת בשטחים בנויים ומורכבים.
          </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="2" style={styleCard}>
      גדוד
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="2">
      <Card.Body>
      1. לאחר מסע ההכשרה הלוחמים יבצעו שירות קרבי בגדוד ובו יהיו אחראים על ביטחון האזרחים בשטח שמעבר לקו הירוק ויתמודדו למול איומי הטרור.
<br />
2. במהלך המסלול הלוחמים המתאימים יעברו קורסי הכשרה מקצועיים בתחומים שונים כגון קורס צלפים, תצפית, נהיגה מבצעית ועוד.
<br />
3. לאחר ארבעה חודשים של פעילות מבצעית, הלוחמים יקבלו את סיכת לוחם הגדוד.
          </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="3" style={styleCard}>
    פרק המעו"ף (לימודים)
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="3">
      <Card.Body>
     <h4> פרק המעו"ף (מצוינות, עתיד ופיתוח אישי)</h4>
<br />
כעבור שנתיים של שירות פעיל מיום הגיוס, זכאים חיילי חרב וחרב תומכ"ל לתקופת לימודים.
<br />
בזמן זה, שנמשך שמונה חודשים, ישולבו החיילים באחד משלושה מסלולים, לטובת שילובם התעסוקתי בעתיד באזרחות ובצבא:
<br />
מכינה אקדמית: לימודי מכינה המאפשרים השתלבות במסלול האקדמיה לרכישת תארים מתקדמים.
<br />
מסלול הנדסאים: במסגרת מסלול הנדסאים, מתאפשר לחייל ללמוד לתעודת הנדסאי חשמל או בניין.
<br />
קורסים מקצועיים: מגוון קורסים במקצועות החשמל, אלקטרוניקה ומחשוב שיעזרו להשתלב באופן מידי בשוק התעסוקה.
          </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
</motion.div>
)
}

export default MyAccordion