import Profile from '../../../assets/img/profile.png'
import SidebarGroupItem from './sidebarGroupItem';
import SidebarItem from './sidebarItem';

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
                    <SidebarGroupItem title='فروشگاه'/>
                    <SidebarItem icon='fa-solid fa-boxes-stacked' title='مدیریت گروه محصول'/>
                    <SidebarItem icon='fa-solid fa-box-open' title='مدیریت محصول'/>
                    <SidebarItem icon='fa-solid fa-copyright' title='مدیریت برند ها'/>
                    <SidebarItem icon='fa-solid fa-certificate' title='مدیریت گارانتی ها'/>
                    <SidebarItem icon='fa-solid fa-palette' title='مدیریت رنگ ها'/>
                    <SidebarItem icon='fa-solid fa-percent' title='مدیریت تخفیف ها'/>
                </section>
                <section className='my-2'>
                    <SidebarGroupItem title='سفارشات و سید'/>
                    <SidebarItem icon='fa-solid fa-cart-plus' title='مدیریت سبد ها'/>
                    <SidebarItem icon='fa-solid fa-dolly' title='مدیریت سفارشات'/>
                    <SidebarItem icon='fa-solid fa-truck' title='مدیریت نحوه  ارسال'/>
                </section>
                <section className='my-2'>
                    <SidebarGroupItem title='کاربران و همکاران'/>
                    <SidebarItem icon='fa-solid fa-users' title='مشاهده کاربران'/>
                    <SidebarItem icon='fa-solid fa-user-pen' title='نقش ها'/>
                    <SidebarItem icon='fa-solid fa-shield-halved' title='مجوز ها'/>
                </section>
                <section className='my-2'>
                    <SidebarGroupItem title='ارتباطات'/>
                    <SidebarItem icon='fa-solid fa-circle-info' title='راهنما'/>
                    <SidebarItem icon='fa-solid fa-comment' title='کامنت ها'/>
                </section>
            </section>
        </>
     );
}
 
export default Aside;