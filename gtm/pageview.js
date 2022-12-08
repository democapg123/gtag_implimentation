
export const config = () => {
  gtag('config', 'G-60FDXKEXRK', {
  'transport_url': 'https://sgtm-ahava-tagging-server.azurewebsites.net',
  'first_party_collection': true,
  'send_page_view': false,
})
gtag('event', 'page_view', {
  'custom_parameter': 'value',
})
 

};
