
import { Container ,Col, Button,Row} from "react-bootstrap";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

const Questions = () => {

  return (
    <>
     
    
     <Container className="questionContainer">
    <p className="questionTitle">
        سوالات متداول
    </p>
    <div className="row">
        <Col md={6}>
        <Accordion allowZeroExpanded>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <p className="accardionTitle fontWeightMedium">
                    چرا برای خرید کارت شارژ شماره تلفن را وارد کنیم؟                    </p>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                   <p className="accardionText">
                   وارد کردن شماره تلفن و ایمیل در هنگام خرید کارت شارژ اجباری می‌باشد تا خریداران در سریعترین زمان ممکن خرید خود را انجام دهند. اما فرض کنید بعد از پرداخت پول شارژ . ارتباط اینترنت شما قطع شود؛ بنابراین صفحۀ کد شارژ را نمی‌توانید ببینید. اگر شماره خود را وارد کرده باشید خیالتان راحت است که یک نسخه از این کد شارژ نزد ما محفوظ است و میتوانید با تماس با پشتیبانی پیگیری کنید                   </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <p className="accardionTitle fontWeightMedium">
                    ترابرد چیست؟                    </p>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                   <p className="accardionText">
                   خرید شارژ برای کاربرانی که از قابلیت ترابرد یا انتقال شماره تلفن همراه استفاده می‌کنند، هم از طریق سایت ایزی پی وجود دارد. در ترابرد کاربران با یک شماره موبایل ثابت از یک اپراتور می‌توانند از سرویس‌های اپراتور دیگر نیز استفاده کنند. برای مثال اگر شماره‌ی سیم‌کارت شما مربوط به همراه اول است با امکان ترابرد یک شناسه دریافت می‌کنید و می‌توانید از خدمات اپراتورهای ایرانسل یا رایتل هم استفاده کنید. برای دریافت شارژ از سایت ایزی‌پی برای سیم‌کارت‌های ترابرد شده باید در همان قسمت اول انجام سفارش اپراتور پذیرای خود را وارد کنید. اپراتور پذیرا اپراتوری دیگری است که شخص قصد استفاده از سرویس‌های آن را دارد.                   </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <p className="accardionTitle fontWeightMedium">
                    آیا سیم کارت ترابرد شده را میتوان از طریق سایت ایزی پی شارژ کرد یا بسته اینترنت خرید؟                  </p>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                   <p className="accardionText">
                   بله، پس از وارد کردن شماره موبایل خود، در صورتی که ترابرد کرده‌اید، اپراتور خود را تغییر دهید و اپراتور پذیرای خود را انتخاب کنید.        
                   </p>
                           </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <p className="accardionTitle fontWeightMedium">
در صورتیکه پول از حساب شما کسر شد ولی عملیات انجام نشد چه کاری باید انجام دهید؟ </p>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                   <p className="accardionText">
                   در این صورت تا ۷۲ ساعت مبلغ کسر شده به‌ حساب شما بازگردانده می‌شود، در غیر این صورت با کارشناسان ایزی‌پی از طریق شماره تماس 02143617 داخلی 2 در ارتباط باشید و زمان تراکنش، مبلغ، شماره پیگیری تراکنش، شماره تلفن خود و شماره‌ی خطی که برای آن شارژ خریده‌اید را اعلام کنید تا همکاران ما پیگیری کنند.         
                   </p>
                          </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <p className="accardionTitle fontWeightMedium">
                    خرید بسته اینترنت برای چه اپراتورهایی در سایت ایزی پی فراهم است؟                 </p>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                   <p className="accardionText">
                   خرید بسته‌ی اینترنت ایرانسل، همراه اول و رایتل از طریق سایت ایزی پی امکان‌پذیر است.              </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <p className="accardionTitle fontWeightMedium">
                    آیا به اندازه مبلغی که شارژ خریداری شده سیم کارتم شارژ میشود؟                   </p>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                   <p className="accardionText">
                   خیر، ۹ درصد از مبلغ شارژ خریداری شده برای مالیات بر ارزش افزوده کسر شده و سیم کارت شما شارژ می‌شود.                 </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        </Col>
        <Col md={6}>
        <Accordion allowZeroExpanded>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <p className="accardionTitle fontWeightMedium">
                    امکان خرید چه نوع شارژهایی از سایت ایزی پی وجود دارد؟                    </p>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                   <p className="accardionText">
                   خرید شارژ مستقیم، غیرمستقیم و رمزدار برای اپراتورهای ایرانسل، همراه اول و رایتل از طریق سایت ایزی‌پی امکان‌پذیر است.                   </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <p className="accardionTitle fontWeightMedium">
                    برای پرداخت هزینه شارژ از طریق کارت بانکی به چه اطلاعاتی نیاز است؟                    </p>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                   <p className="accardionText">
                   برای پرداخت هزینه‌ی شارژ تنها کافی است رمز دوم، تاریخ انقضا و کد اعتبارسنجی (Card Validation Value به‌اختصار CVV2) کارت بانکی خود را داشته باشید.                   </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <p className="accardionTitle fontWeightMedium">
                    شارژ رمزدار چیست؟                    </p>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                   <p className="accardionText">
                   در روش شارژ رمزدار، کد ۱۲ تا ۱۶ رقمی برای فرد متقاضی ارسال می‌شود. برای فعال‌سازی این کد، باید کد دستوری مخصوص به هر اپراتور شماره‌گیری شود.                   </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <p className="accardionTitle fontWeightMedium">
                    شارژ شگفت انگیز چیست؟                    </p>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                   <p className="accardionText">
                   شارژ دریافت می‌کنید ولی مدت زمان استفاده از آن محدود است.

</p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <p className="accardionTitle fontWeightMedium">
                    باکدام کارت های بانکی امکان خرید شارژ و بسته اینترنت از ایزی پی وجود دارد؟                     </p>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                   <p className="accardionText">
                   پرداخت هزینه‌ی شارژ در سایت ایزی‌پی از طریق تمامی کارت‌های بانکی عضو شبکه‌ی شتاب امکان‌پذیر است.                   </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <p className="accardionTitle fontWeightMedium">
                    ترافیک ملی چیست؟                     </p>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                   <p className="accardionText">
                   ترافیک ملی شامل یک سری وب‌سایت منتخب است که در صورت بازدید و استفاده از آن‌ها از پنجاه درصد تخفیف در هزینه‌ی اینترنت بهره‌مند می‌شوید                  </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        </Col>
    </div>
      </Container>
  
    </>
  );
};
export default Questions;
