import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Phone from './phone'


function index() {
  return (
    <>
    <Head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
 



    </Head>


<div className="container">  
<div className="text-center mx-auto" id='Phone'>

<Phone/>

</div>
</div>
   
    
  
   
<div className="container"> 
<nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/"><img src="favicon.ico" width={70} alt="" /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-link mx-3" aria-current="page" href="/"><h3>Home</h3></Link>
          <Link className="nav-link mx-3" href="/PG-v9"><h3>สินค้า PG</h3></Link>

        </div>
      </div>
    </div>
  </nav>
  <header>
        <h1>เว็บตรงของแท้100%</h1>
        <div className="text-center"><h3>เว็บตรงจากสิงห์โปร100%</h3></div>
        
    </header>


    <div className="container">
  <ul>
    <h3>เงื่อนไขการเคลมสินค้าแบบด่วนๆ </h3>
    <li>ระยะเวลาเคลมสินค้าจะไม่เกิน 3 วันทำการ (ไม่นับวันที่พัสดุกำลังจัดส่งมาที่ร้าน) 
ค่าส่งสินค้าที่ลูกร้านสำรองจ่าย ลูกค้าสามารถส่งสลิปค่าส่ง พร้อมเลขบัญชี เพื่อให้ทางร้านโอนค่าจัดส่งให้
เงื่อนไขการเคลม (เครื่องที่ยังอยู่ในระยะเวลาประกัน)</li>
<li>1. เครื่อง กล่องเครื่อง และอุปกรณ์ของเครื่องที่จะเคลม จะต้องครบ (ยกเว้นของแถม ทางร้านให้ฟรีจ้า) </li>
<li>2. เครื่องที่จะเคลมต้องไม่มีรอยแตก ถลอกที่เห็นได้ชัด ซึ่งเป็นรอยที่เกิดจากการใช้งานของลูกค้า</li>
<li>3. หากพบเจอสินค้าที่มีรอยแตกร้าว รอยถลอก ที่ไม่ได้เกิดจากการใช้งานของลูกค้า ทางร้านรบกวนให้ลูกค้าแจ้งมากับทางร้านทันทีภายในวันที่ได้รับพัสดุ 
 หากทางร้านพบว่าลูกค้าไม่ปฎิบัติทำเงื่อนไขในการเคลม ทางร้านขอใช้สิทธิ์ในการตัดเป็นเครื่องหมดประกันทันที
</li>
  </ul>
</div>
<h3>แบรนด์ <br />PG</h3>

<div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card">
      <img src="img/1.jpg" className="card-img-top" alt="phone pg v9"/>
      <div className="card-body">
        <h5 className="card-title">Phone PG V9</h5>
        <p className="card-text">โทรศัพท์มือถือราคาถูก(ล้างสต็อค) Smart Phone PG V9 Plusหน้าจอกว้าง 6.3 นิ้ว ROM 64GB android 10.0</p>
      </div>
      <a href="https://www.lazada.co.th/products/smart-phone-pg-v9-plus-63-rom-64gb-android-100-i2915307537-s11933182971.html?spm=a2o4m.tm80167383.2074280300.1.7128CCkXCCkXQg.7128CCkXCCkXQg">
      <button className='btn btn-info'>ราคา 1,190 บาท</button>
      </a>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="img/2.jpg" className="card-img-top" alt="phone pg v9"/>
      <div className="card-body">
        <h5 className="card-title">Phone PG V9</h5>
        <p className="card-text">โทรศัพท์มือถือราคาถูก(ล้างสต็อค) Smart Phone PG V9 Plusหน้าจอกว้าง 6.3 นิ้ว ROM 64GB android 10.0</p>
      </div>
      <a href="https://www.lazada.co.th/products/smart-phone-pg-v9-plus-63-rom-64gb-android-100-i2915307537-s11933182971.html?spm=a2o4m.tm80167383.2074280300.1.7128CCkXCCkXQg.7128CCkXCCkXQg">
      <button className='btn btn-info'>ราคา 1,190 บาท</button>
      </a>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="img/3.jpg" className="card-img-top" alt="phone pg v9"/>
      <div className="card-body">
        <h5 className="card-title">Phone PG V9</h5>
        <p className="card-text">โทรศัพท์มือถือราคาถูก(ล้างสต็อค) Smart Phone PG V9 Plusหน้าจอกว้าง 6.3 นิ้ว ROM 64GB android 10.0</p>
      </div>
      <a href="https://www.lazada.co.th/products/smart-phone-pg-v9-plus-63-rom-64gb-android-100-i2915307537-s11933182971.html?spm=a2o4m.tm80167383.2074280300.1.7128CCkXCCkXQg.7128CCkXCCkXQg">
      <button className='btn btn-info'>ราคา 1,190 บาท</button>
      </a>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="img/4.jpg" className="card-img-top" alt="phone pg v9"/>
      <div className="card-body">
        <h5 className="card-title">Phone PG V9</h5>
        <p className="card-text">โทรศัพท์มือถือราคาถูก(ล้างสต็อค) Smart Phone PG V9 Plusหน้าจอกว้าง 6.3 นิ้ว ROM 64GB android 10.0</p>
      </div>
      <a href="https://www.lazada.co.th/products/smart-phone-pg-v9-plus-63-rom-64gb-android-100-i2915307537-s11933182971.html?spm=a2o4m.tm80167383.2074280300.1.7128CCkXCCkXQg.7128CCkXCCkXQg">
      <button className='btn btn-info'>ราคา 1,190 บาท</button>
      </a>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="img/5.jpg" className="card-img-top" alt="phone pg v9"/>
      <div className="card-body">
        <h5 className="card-title">Phone PG V9</h5>
        <p className="card-text">โทรศัพท์มือถือราคาถูก(ล้างสต็อค) Smart Phone PG V9 Plusหน้าจอกว้าง 6.3 นิ้ว ROM 64GB android 10.0</p>
      </div>
      <a href="https://www.lazada.co.th/products/smart-phone-pg-v9-plus-63-rom-64gb-android-100-i2915307537-s11933182971.html?spm=a2o4m.tm80167383.2074280300.1.7128CCkXCCkXQg.7128CCkXCCkXQg">
      <button className='btn btn-info'>ราคา 1,190 บาท</button>
      </a>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="img/6.jpg" className="card-img-top" alt="phone pg v9"/>
      <div className="card-body">
        <h5 className="card-title">Phone PG V9</h5>
        <p className="card-text">โทรศัพท์มือถือราคาถูก(ล้างสต็อค) Smart Phone PG V9 Plusหน้าจอกว้าง 6.3 นิ้ว ROM 64GB android 10.0</p>
      </div>
      <a href="https://www.lazada.co.th/products/smart-phone-pg-v9-plus-63-rom-64gb-android-100-i2915307537-s11933182971.html?spm=a2o4m.tm80167383.2074280300.1.7128CCkXCCkXQg.7128CCkXCCkXQg">
      <button className='btn btn-info'>ราคา 1,190 บาท</button>
      </a>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="img/7.jpg" className="card-img-top" alt="phone pg v9"/>
      <div className="card-body">
        <h5 className="card-title">Phone PG V9</h5>
        <p className="card-text">โทรศัพท์มือถือราคาถูก(ล้างสต็อค) Smart Phone PG V9 Plusหน้าจอกว้าง 6.3 นิ้ว ROM 64GB android 10.0</p>
      </div>
      <a href="https://www.lazada.co.th/products/smart-phone-pg-v9-plus-63-rom-64gb-android-100-i2915307537-s11933182971.html?spm=a2o4m.tm80167383.2074280300.1.7128CCkXCCkXQg.7128CCkXCCkXQg">
      <button className='btn btn-info'>ราคา 1,190 บาท</button>
      </a>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="img/8.jpg" className="card-img-top" alt="phone pg v9"/>
      <div className="card-body">
        <h5 className="card-title">Phone PG V9</h5>
        <p className="card-text">โทรศัพท์มือถือราคาถูก(ล้างสต็อค) Smart Phone PG V9 Plusหน้าจอกว้าง 6.3 นิ้ว ROM 64GB android 10.0</p>
      </div>
      <a href="https://www.lazada.co.th/products/smart-phone-pg-v9-plus-63-rom-64gb-android-100-i2915307537-s11933182971.html?spm=a2o4m.tm80167383.2074280300.1.7128CCkXCCkXQg.7128CCkXCCkXQg">
      <button className='btn btn-info'>ราคา 1,190 บาท</button>
      </a>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="img/9.jpg" className="card-img-top" alt="phone pg v9"/>
      <div className="card-body">
        <h5 className="card-title">Phone PG V9</h5>
        <p className="card-text">โทรศัพท์มือถือราคาถูก(ล้างสต็อค) Smart Phone PG V9 Plusหน้าจอกว้าง 6.3 นิ้ว ROM 64GB android 10.0</p>
      </div>
      <a href="https://www.lazada.co.th/products/smart-phone-pg-v9-plus-63-rom-64gb-android-100-i2915307537-s11933182971.html?spm=a2o4m.tm80167383.2074280300.1.7128CCkXCCkXQg.7128CCkXCCkXQg">
      <button className='btn btn-info'>ราคา 1,190 บาท</button>
      </a>
    </div>
  </div>
</div>
<p>#โทรศัพท์ #โทรศัพท์คุณภาพดี #โทรศัพท์ใหม่ #โทรศัพท์มือ ' หนึ่ง #โทรศัพท์ #iphone #vivo #oppo #mgt #ร้านแมวกระโดดโฟน #Tpower #strong #โทรศัพท์ราคาถูก #คุณภาพดี #มือหนึ่งราคาถูก #ถูกสุดในรุ่น</p>


   
<footer>
          <p>© 2024 Phone PG V9 . | <a href="/">Home</a></p>

    </footer>
      </div>

      
    </>
  )
}

export default index
