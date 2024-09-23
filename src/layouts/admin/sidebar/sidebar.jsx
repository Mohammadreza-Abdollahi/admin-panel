import Profile from '../../../assets/img/profile.png'
import SidebarAvatar from './SidebarAvatar';
import SidebarGroupItem from './SidebarGroupItem';
import SidebarItem from './SidebarItem';

const Aside = () => {
    return ( 
        <>
            <section className="overflow-hidden group text-nowrap max-w-24 min-w-24 hover:min-w-80 transition-all hover:transition-all ease-in-out duration-300 hover:duration-300 hover:z-50 fixed h-full inline-block pt-3 px-5 bg-gray-500 shadow-2xl border-l-2 border-palete-2-400-1">
                <SidebarAvatar profile={Profile}/>
                <section>
                <SidebarItem itemPath={'/'} icon='fa-solid fa-gauge-high' title='داشبورد'/>
                </section>
                <section className='my-2'>
                    <SidebarGroupItem title='فروشگاه'/>
                    <SidebarItem itemPath={'/category'} icon='fa-solid fa-boxes-stacked' title='مدیریت گروه محصول'/>
                    <SidebarItem itemPath={'/product'} icon='fa-solid fa-box-open' title='مدیریت محصول'/>
                    <SidebarItem itemPath={'/brands'} icon='fa-solid fa-copyright' title='مدیریت برند ها'/>
                    <SidebarItem itemPath={'/guaranties'} icon='fa-solid fa-certificate' title='مدیریت گارانتی ها'/>
                    <SidebarItem itemPath={'/colors'} icon='fa-solid fa-palette' title='مدیریت رنگ ها'/>
                    <SidebarItem itemPath={'/discounts'} icon='fa-solid fa-percent' title='مدیریت تخفیف ها'/>
                </section>
                <section className='my-2'>
                    <SidebarGroupItem title='سفارشات و سید'/>
                    <SidebarItem itemPath={'/carts'} icon='fa-solid fa-cart-plus' title='مدیریت سبد ها'/>
                    <SidebarItem itemPath={'/orders'} icon='fa-solid fa-dolly' title='مدیریت سفارشات'/>
                    <SidebarItem itemPath={'/test7'} icon='fa-solid fa-truck' title='مدیریت نحوه  ارسال'/>
                </section>
                <section className='my-2'>
                    <SidebarGroupItem title='کاربران و همکاران'/>
                    <SidebarItem itemPath={'/test8'} icon='fa-solid fa-users' title='مشاهده کاربران'/>
                    <SidebarItem itemPath={'/test9'} icon='fa-solid fa-user-pen' title='نقش ها'/>
                    <SidebarItem itemPath={'/test10'} icon='fa-solid fa-shield-halved' title='مجوز ها'/>
                </section>
                <section className='my-2'>
                    <SidebarGroupItem title='ارتباطات'/>
                    <SidebarItem itemPath={'/test11'} icon='fa-solid fa-circle-info' title='راهنما'/>
                    <SidebarItem itemPath={'/test12'} icon='fa-solid fa-comment' title='کامنت ها'/>
                </section>
            </section>
        </>
     );
}
 
export default Aside;