import { GridCards } from '@/components/home-components/grid-cards';
import { GridGraphs } from '@/components/home-components/grid-graphs';
import { TableUsers } from '@/components/home-components/table-users/table-users';


export default function HomePage() {
    return (
        <section className='flex flex-col gap-6'>
            <GridCards />
            <GridGraphs />
            <TableUsers />
        </section>
    )
}
