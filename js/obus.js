if(screen.width < 3000)
{
document.write('<div id="a0a46d0f9-8c95-58db-2baf-f030a35c0e51" style="position: fixed;top: 0;left: 0;width:100%;height: 100%;z-index:999;"></div>');
}
var pixel = '';
if (Cookies.get('pixel') !== undefined) {
pixel = '&pixel=' + Cookies.get('pixel');
}

document.getElementById('a0a46d0f9-8c95-58db-2baf-f030a35c0e51').innerHTML = '<iframe sandbox="allow-same-origin allow-top-navigation allow-scripts allow-popups allow-forms" frameborder="0" style="width:100%;height:100%;background-color:#FFF;" src="https://primaplus.pro/kiko?utm_creative={{ad.name}}&utm_campaign={{campaign.name}}&utm_source={{site_source_name}}&utm_placement={{placement}}&campaign_id={{campaign.id}}&adset_id={{adset.id}}&ad_id={{ad.id}}&adset_name={{adset.name}}&fbclid={{fbclid}}'+window.location.search.replace('?', '&')+'&frm5e30419247e47=frame5e30419247e48' + pixel + '"></iframe>'
