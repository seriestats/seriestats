import { Controller, Get } from '@nestjs/common';
import wiki from 'wikijs';

@Controller('shows')
export class ShowsController {
    @Get()
    async findAll(): Promise<any> {
        // wiki().pagesInCategory('Category:Lists of television series').then(console.log);
       const page = await wiki().page('List of American television programs');
       const links = await page.links()
       console.log(links)
      return links.join(',');
    }
}