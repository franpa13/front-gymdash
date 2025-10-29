import { GridCards } from '@/components/home-components/grid-cards';
import { GridGraphs } from '@/components/home-components/grid-graphs';


export default function HomePage() {
    return (
        <section className='flex flex-col gap-6'>
            <GridCards />
            <GridGraphs />
        </section>
    )
}
