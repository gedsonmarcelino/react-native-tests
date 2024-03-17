import { Header } from '@/components/header';
import { Card } from '@/components/video/card';
import { TCard } from '@/components/video/card/card';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CARDS: TCard[] = [{
  id: '1',
  image: 'https://picsum.photos/600/480?random=1',
  profile: 'https://picsum.photos/600/480?random=2',
  title: 'Pariatur id minim reprehenderit mollit irure eiusmod id id cupidatat elit.',
  channel: 'Pariatur',
  views: "10k views",
  time: "1 month ago",
}]

export default function Tab() {

  return (
    <SafeAreaView>
      <Header />
      <ScrollView>
        {CARDS.map(card => (
          <Card key={card.id} card={card} />
        ))}
      </ScrollView>
    </SafeAreaView>);
}
