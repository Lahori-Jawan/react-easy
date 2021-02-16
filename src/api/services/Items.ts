import { axios } from '@/app/config';
import ItemEndpoints from '../endpoints/item';
import tryy from '@/utils/betterTry';

class ItemService {
  private itemEndpoints: ItemEndpoints;

  constructor() {
    this.itemEndpoints = new ItemEndpoints();
  }

  async getItems(params: any) {
    return await tryy(axios.get(this.itemEndpoints.ITEM_LIST, { params }));
  }

  async retrieveItems() {
    return fetch(this.itemEndpoints.ITEM_LIST)
      .then((response) => {
        if (!response.ok) {
          this.handleResponseError(response);
        }
        return response.json();
      })
      .then((json) => {
        console.log('Retrieved items:');
        console.log(json);
        const items = [];
        const itemArray = json._embedded.collectionItems;
        for (var i = 0; i < itemArray.length; i++) {
          itemArray[i]['link'] = itemArray[i]._links.self.href;
          items.push(itemArray[i]);
        }
        return items;
      })
      .catch((error) => {
        this.handleError(error);
      });
  }

  async getItem(itemLink: any) {
    console.log('ItemService.getItem():');
    console.log('Item: ' + itemLink);
    return fetch(itemLink)
      .then((response) => {
        if (!response.ok) {
          this.handleResponseError(response);
        }
        return response.json();
      })
      .then((item) => {
        item['link'] = item._links.self.href;
        return item;
      })
      .catch((error) => {
        this.handleError(error);
      });
  }

  async createItem(newitem: any) {
    console.log('ItemService.createItem():');
    console.log(newitem);
    return fetch(this.itemEndpoints.ITEM_LIST, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newitem),
    })
      .then((response) => {
        if (!response.ok) {
          this.handleResponseError(response);
        }
        return response.json();
      })
      .catch((error) => {
        this.handleError(error);
      });
  }

  async deleteItem(itemlink: any) {
    console.log('ItemService.deleteItem():');
    console.log('item: ' + itemlink);
    return fetch(itemlink, {
      method: 'DELETE',
      mode: 'cors',
    })
      .then((response) => {
        if (!response.ok) {
          this.handleResponseError(response);
        }
      })
      .catch((error) => {
        this.handleError(error);
      });
  }

  async updateItem(item: any) {
    console.log('ItemService.updateItem():');
    console.log(item);
    return fetch(item.link, {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    })
      .then((response) => {
        if (!response.ok) {
          this.handleResponseError(response);
        }
        return response.json();
      })
      .catch((error) => {
        this.handleError(error);
      });
  }

  handleResponseError(response: any) {
    throw new Error('HTTP error, status = ' + response.status);
  }

  handleError(error: any) {
    console.log(error.message);
  }
}

export default ItemService;
