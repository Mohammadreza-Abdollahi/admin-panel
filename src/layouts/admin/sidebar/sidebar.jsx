import Profile from '../../../assets/img/profile.png'
import SidebarAvatar from './sidebarAvatar';
import SidebarGroupItem from './sidebarGroupItem';
import SidebarItem from './sidebarItem';

const Aside = () => {
    return ( 
        <>
            <section className="overflow-hidden group text-nowrap max-w-24 min-w-24 hover:min-w-80 transition-all hover:transition-all ease-in-out duration-300 hover:duration-300 hover:z-50 fixed h-full inline-block pt-3 px-5 bg-palete-3-950 shadow-2xl border-l-2 border-palete-2-400-1">
                <SidebarAvatar profile={Profile}/>
                <section>
                <SidebarItem icon='fa-solid fa-gauge-high' title='داشبورد'/>
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