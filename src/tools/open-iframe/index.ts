import { defineTool } from '../tool'; 
import { Browser } from '@vicons/tabler';


export const tool = defineTool({
  name: "",
  path: '/open-url',
  description: "iframe打开新页面",
  keywords: ['iframe', 'open'],
  component: () => import('./open-iframe.vue'), 
  createdAt: new Date('2023-11-05'),
  icon: Browser,
});
