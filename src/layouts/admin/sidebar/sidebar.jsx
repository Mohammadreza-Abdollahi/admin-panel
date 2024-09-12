import Profile from '../../../assets/img/profile.png'

const Aside = () => {
    return ( 
        <>
            <section className="overflow-hidden group text-nowrap max-w-24 min-w-24 hover:min-w-80 transition-all hover:transition-all ease-in-out duration-300 hover:duration-300 hover:z-50 fixed h-full inline-block pt-3 px-5 bg-palete-1-200-1 shadow-2xl">
                <section className='text-center pt-2 mb-3'>
                    <img className='rounded-full m-auto mb-1 shadow-lg shadow-palete-3-500' width={56} src={Profile} alt="ProfilePic" />
                    <span className='mr-40 text-xl opacity-0 transition-all group-hover:duration-500 group-hover:opacity-100 group-hover:mr-0'>محمدرضا عبداللهی</span>
                </section>
                <section>
                    <div className="bg-palete-2-100-1 border border-palete-2-600 py-1 mb-1 rounded-lg cursor-pointer transition-all duration-300 hover:-translate-x-2 hover:duration-300">
                        <i class="fa-solid fa-gauge-high text-lg mx-5 group-hover:mx-1 group-hover:px-2 group-hover:text-xl align-middle transition-all group-hover:duration-500"></i>
                        <span className="text-base align-middle mr-14 opacity-0 transition-all group-hover:duration-500 group-hover:opacity-100 group-hover:mr-0">داشبورد</span>
                    </div>
                </section>
                <section className='my-2'>
                    <div className='text-center mb-1'>
                        <span className='text-palete-1-700 text-lg mr-40 transition-all group-hover:duration-500 opacity-0 group-hover:mr-0 group-hover:opacity-100 '><b>فروشگاه</b></span>
                    </div>
                    <div className="bg-palete-3-100-1 border border-palete-3-500 py-1 mb-1 rounded-lg cursor-pointer transition-all duration-300 hover:-translate-x-2 hover:duration-300">
                        <i class="fa-solid fa-boxes-stacked text-lg mx-5 group-hover:mx-1 group-hover:px-2 group-hover:text-xl align-middle transition-all group-hover:duration-500"></i>
                        <span className="text-base align-middle mr-14 opacity-0 transition-all group-hover:duration-500 group-hover:opacity-100 group-hover:mr-0">مدیریت گروه محصول</span>
                    </div>
                    <div className="bg-palete-3-100-1 border border-palete-3-500 py-1 mb-1 rounded-lg cursor-pointer transition-all duration-300 hover:-translate-x-2 hover:duration-300">
                        <i class="fa-solid fa-box-open text-lg mx-5 group-hover:mx-1 group-hover:px-2 group-hover:text-xl align-middle transition-all group-hover:duration-500"></i>
                        <span className="text-base align-middle mr-14 opacity-0 transition-all group-hover:duration-500 group-hover:opacity-100 group-hover:mr-0">مدیریت محصول</span>
                    </div>
                    <div className="bg-palete-3-100-1 border border-palete-3-500 py-1 mb-1 rounded-lg cursor-pointer transition-all duration-300 hover:-translate-x-2 hover:duration-300">
                        <i class="fa-solid fa-copyright text-lg mx-5 group-hover:mx-1 group-hover:px-2 group-hover:text-xl align-middle transition-all group-hover:duration-500"></i>
                        <span className="text-base align-middle mr-14 opacity-0 transition-all group-hover:duration-500 group-hover:opacity-100 group-hover:mr-0">مدیریت برند ها</span>
                    </div>
                    <div className="bg-palete-3-100-1 border border-palete-3-500 py-1 mb-1 rounded-lg cursor-pointer transition-all duration-300 hover:-translate-x-2 hover:duration-300">
                        <i class="fa-solid fa-certificate text-lg mx-5 group-hover:mx-1 group-hover:px-2 group-hover:text-xl align-middle transition-all group-hover:duration-500"></i>
                        <span className="text-base align-middle mr-14 opacity-0 transition-all group-hover:duration-500 group-hover:opacity-100 group-hover:mr-0">مدیریت گارانتی ها</span>
                    </div>
                    <div className="bg-palete-3-100-1 border border-palete-3-500 py-1 mb-1 rounded-lg cursor-pointer transition-all duration-300 hover:-translate-x-2 hover:duration-300">
                        <i class="fa-solid fa-palette text-lg mx-5 group-hover:mx-1 group-hover:px-2 group-hover:text-xl align-middle transition-all group-hover:duration-500"></i>
                        <span className="text-base align-middle mr-14 opacity-0 transition-all group-hover:duration-500 group-hover:opacity-100 group-hover:mr-0">مدیریت رنگ ها</span>
                    </div>
                    <div className="bg-palete-3-100-1 border border-palete-3-500 py-1 mb-1 rounded-lg cursor-pointer transition-all duration-300 hover:-translate-x-2 hover:duration-300">
                        <i class="fa-solid fa-percent text-lg mx-5 group-hover:mx-1 group-hover:px-2 group-hover:text-xl align-middle transition-all group-hover:duration-500"></i>
                        <span className="text-base align-middle mr-14 opacity-0 transition-all group-hover:duration-500 group-hover:opacity-100 group-hover:mr-0">مدیریت تخفیف ها</span>
                    </div>
                </section>
                <section className='my-2'>
                    <div className='text-center mb-1'>
                        <span className='text-palete-1-700 text-lg mr-40 transition-all group-hover:duration-500 opacity-0 group-hover:mr-0 group-hover:opacity-100 '><b>سفارشات و سبد</b></span>
                    </div>
                    <div className="bg-palete-3-100-1 border border-palete-3-500 py-1 mb-1 rounded-lg cursor-pointer transition-all duration-300 hover:-translate-x-2 hover:duration-300">
                        <i class="fa-solid fa-cart-plus text-lg mx-5 group-hover:mx-1 group-hover:px-2 group-hover:text-2xl align-middle transition-all group-hover:duration-500"></i>
                        <span className="text-base align-middle mr-14 opacity-0 transition-all group-hover:duration-500 group-hover:opacity-100 group-hover:mr-0">مدیریت سبد ها</span>
                    </div>
                    <div className="bg-palete-3-100-1 border border-palete-3-500 py-1 mb-1 rounded-lg cursor-pointer transition-all duration-300 hover:-translate-x-2 hover:duration-300">
                        <i class="fa-solid fa-dolly text-lg mx-5 group-hover:mx-1 group-hover:px-2 group-hover:text-xl align-middle transition-all group-hover:duration-500"></i>
                        <span className="text-base align-middle mr-14 opacity-0 transition-all group-hover:duration-500 group-hover:opacity-100 group-hover:mr-0">مدیریت سفارشات</span>
                    </div>
                    <div className="bg-palete-3-100-1 border border-palete-3-500 py-1 mb-1 rounded-lg cursor-pointer transition-all duration-300 hover:-translate-x-2 hover:duration-300">
                        <i class="fa-solid fa-truck text-lg mx-5 group-hover:mx-1 group-hover:px-2 group-hover:text-xl align-middle transition-all group-hover:duration-500"></i>
                        <span className="text-base align-middle mr-14 opacity-0 transition-all group-hover:duration-500 group-hover:opacity-100 group-hover:mr-0">مدیریت نحوه  ارسال</span>
                    </div>
                </section>
                <section className='my-2'>
                    <div className='text-center mb-1'>
                        <span className='text-palete-1-700 text-lg mr-40 transition-all group-hover:duration-500 opacity-0 group-hover:mr-0 group-hover:opacity-100 '><b>کاربران و همکاران</b></span>
                    </div>
                    <div className="bg-palete-3-100-1 border border-palete-3-500 py-1 mb-1 rounded-lg cursor-pointer transition-all duration-300 hover:-translate-x-2 hover:duration-300">
                        <i class="fa-solid fa-users text-lg mx-5 group-hover:mx-1 group-hover:px-2 group-hover:text-2xl align-middle transition-all group-hover:duration-500"></i>
                        <span className="text-base align-middle mr-14 opacity-0 transition-all group-hover:duration-500 group-hover:opacity-100 group-hover:mr-0">مشاهده کاربران</span>
                    </div>
                    <div className="bg-palete-3-100-1 border border-palete-3-500 py-1 mb-1 rounded-lg cursor-pointer transition-all duration-300 hover:-translate-x-2 hover:duration-300">
                        <i class="fa-solid fa-user-pen text-lg mx-5 group-hover:mx-1 group-hover:px-2 group-hover:text-xl align-middle transition-all group-hover:duration-500"></i>
                        <span className="text-base align-middle mr-14 opacity-0 transition-all group-hover:duration-500 group-hover:opacity-100 group-hover:mr-0">نقش ها</span>
                    </div>
                    <div className="bg-palete-3-100-1 border border-palete-3-500 py-1 mb-1 rounded-lg cursor-pointer transition-all duration-300 hover:-translate-x-2 hover:duration-300">
                        <i class="fa-solid fa-shield-halved text-lg mx-5 group-hover:mx-1 group-hover:px-2 group-hover:text-xl align-middle transition-all group-hover:duration-500"></i>
                        <span className="text-base align-middle mr-14 opacity-0 transition-all group-hover:duration-500 group-hover:opacity-100 group-hover:mr-0">مجوز ها</span>
                    </div>
                </section>
                <section className='my-2'>
                    <div className='text-center mb-1'>
                        <span className='text-palete-1-700 text-lg mr-40 transition-all group-hover:duration-500 opacity-0 group-hover:mr-0 group-hover:opacity-100 '><b>ارتباطات</b></span>
                    </div>
                    <div className="bg-palete-3-100-1 border border-palete-3-500 py-1 mb-1 rounded-lg cursor-pointer transition-all duration-300 hover:-translate-x-2 hover:duration-300">
                        <i class="fa-solid fa-circle-info text-lg mx-5 group-hover:mx-1 group-hover:px-2 group-hover:text-xl align-middle transition-all group-hover:duration-500"></i>
                        <span className="text-base align-middle mr-14 opacity-0 transition-all group-hover:duration-500 group-hover:opacity-100 group-hover:mr-0">راهنما</span>
                    </div>
                    <div className="bg-palete-3-100-1 border border-palete-3-500 py-1 mb-1 rounded-lg cursor-pointer transition-all duration-300 hover:-translate-x-2 hover:duration-300">
                        <i class="fa-solid fa-comment text-lg mx-5 group-hover:mx-1 group-hover:px-2 group-hover:text-xl align-middle transition-all group-hover:duration-500"></i>
                        <span className="text-base align-middle mr-14 opacity-0 transition-all group-hover:duration-500 group-hover:opacity-100 group-hover:mr-0">کامنت ها</span>
                    </div>
                </section>
            </section>
        </>
     );
}
 
export default Aside;