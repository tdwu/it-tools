import { defineTool } from '../tool'; 
import { translate } from '@/plugins/i18n.plugin';
import { LayersLinked } from '@vicons/tabler';

export const tool = defineTool({
  name: "",
  path: '/open-url',
  description:"新窗口打开界面...",
  keywords: ['open', 'new', 'url'],
  component: () => import('./open-url.vue'), 
  createdAt: new Date('2023-11-05'),
  icon: LayersLinked,
});
