function Add(a,b)
{
    if(typeof a !== 'number' || typeof b !== 'number')
    {
        throw new Error('Peavad numbrid olema');
    }
}
module.exports = Add;