//----addresses
// assistantapi = '../brservicecentralb/AssistantAgent.php';
// basestore = 'http://www.storecentralapps.com/'
// baseaddr = 'http://www.asystirweb.com.php56-17.dfw3-1.websitetestlink.com/'

//----messages
window.asystir = { servers: {}, messages: {}, email: {}, selector: { multioptions: {} }, options: {}, ux: {} }
window.asystir.accountname = 'CIS'
window.asystir.tokenin = 'b65a04b51c2af3bfebcb258bafc72c80'
window.asystir.servers.baseaddr = 'https://asystir.com/'
window.asystir.servers.assistantapi = 'https://www.brservicecentrals.com/AssistantAgent.php'
window.asystir.servers.basestore = 'https://www.storecentralapps.com/'
window.asystir.messages.contactusmessage = ''
window.asystir.messages.sssprovidernoteincludedmessage = 'Lamentablemente no tenemos convenio con su obra social, puede proseguir con el registro en forma particular'
window.asystir.messages.idnotfoundmessage = 'No se encontró su DNI, presione "siguiente" e ingrese su información'
window.asystir.messages.initmessage = ''
window.asystir.email.accountreservationsemail = 'turnos@consultoracis.com.ar'
window.asystir.email.sendereservationinformation = 'true'
window.asystir.selector.by = 'resource' // resource/service/group/multioptions
window.asystir.selector.multioptions.specialty = true
window.asystir.selector.multioptions.resource = true
window.asystir.selector.multioptions.services = true
window.asystir.selector.multioptions.defaults = 'serviceselector'
window.asystir.options.showreservationlocations = true
window.asystir.options.showservicegroups = false
window.asystir.options.servicegroupselected = false
window.asystir.options.servicegroupidcaller = ''
window.asystir.options.notvalidateinstitutions = false
window.asystir.options.noallownewcustomers = false
window.asystir.options.correctcontactinfo = true
window.asystir.options.companyfield = true
window.asystir.options.listresourcefullname = true
window.asystir.options.listresourcefullnamereverse = false
window.asystir.donotrequestinstitution = true
window.asystir.ux.cssinterface = ''
window.asystir.options.translate = []
window.asystir.options.translate.push(['Seleccione profesional', 'Selecione área de servicio'])
window.asystir.options.translate.push(['other', 'otro'])

//----loader
var head = document.getElementsByTagName('head')[0]
var js = document.createElement('script')
js.type = 'text/javascript'
js.src = window.asystir.servers.baseaddr + 'Process3.js'
head.appendChild(js)
