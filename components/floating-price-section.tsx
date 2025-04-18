"use client"

import { useState } from "react"
import { EuroIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function FloatingPriceButton() {
    const [open, setOpen] = useState(false)

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <Button
                onClick={() => setOpen(true)}
                className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-40 rounded-full shadow-lg bg-sky-600 hover:bg-sky-700 text-white h-14 w-14 p-0"
                aria-label="Voir les tarifs"
            >
                <EuroIcon className="h-6 w-6" />
            </Button>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto bg-white">
                <DialogHeader className="border-b border-sky-100 pb-4 mb-6">
                    <DialogTitle className="text-xl font-semibold text-sky-800">Tarifs</DialogTitle>
                </DialogHeader>

                <Tabs defaultValue="membership" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-6 bg-sky-50">
                        <TabsTrigger value="membership" className="data-[state=active]:bg-sky-600 data-[state=active]:text-white">
                            Adhésion
                        </TabsTrigger>
                        <TabsTrigger value="aircraft" className="data-[state=active]:bg-sky-600 data-[state=active]:text-white">
                            Avions
                        </TabsTrigger>
                        <TabsTrigger value="instruction" className="data-[state=active]:bg-sky-600 data-[state=active]:text-white">
                            Formation
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="membership" className="space-y-4">
                        <div className="rounded-lg border border-sky-100 overflow-hidden">
                            <div className="bg-sky-50 px-4 py-3 border-b border-sky-100">
                                <h3 className="font-medium text-sky-800">Cotisations annuelles</h3>
                            </div>
                            <div className="divide-y divide-sky-100">
                                <div className="px-4 py-3">
                                    <div className="flex justify-between mb-1">
                                        <p className="font-medium text-gray-700">Cotisation club unique (pilotes et membres amis)</p>
                                        <p className="font-semibold text-sky-700">55€</p>
                                    </div>

                                </div>
                                <div className="px-4 py-3 bg-sky-50/50">
                                    <div className="flex justify-between mb-1">
                                        <p className="font-medium text-gray-700">Frais de gestion membres amis</p>
                                        <p className="font-semibold text-sky-700">30€</p>
                                    </div>

                                </div>
                                <div className="px-4 py-3">
                                    <div className="flex justify-between mb-1">
                                        <p className="font-medium text-gray-700">Frais de gestion pilote avion</p>
                                        <p className="font-semibold text-sky-700">125€</p>
                                    </div>
                                </div>
                                <div className="px-4 py-3">
                                    <div className="flex justify-between mb-1">
                                        <p className="font-medium text-gray-700">Frais de gestion pilote ulm</p>
                                        <p className="font-semibold text-sky-700">85€</p>
                                    </div>
                                </div>


                            </div>


                        </div>
                        <div className="rounded-lg border border-sky-100 overflow-hidden">
                            <div className="bg-sky-50 px-4 py-3 border-b border-sky-100">
                                <h3 className="font-medium text-sky-800">Cotisations mensuelles</h3>
                            </div>
                            <div className="px-4 py-3">
                                    <div className="flex justify-between mb-1">
                                        <p className="font-medium text-gray-700">Frais de gestion pilote de passage</p>
                                        <p className="font-semibold text-sky-700">20€</p>
                                    </div>
                                </div>
                        </div>

                    </TabsContent>

                    <TabsContent value="aircraft" className="space-y-4">
                        <div className="rounded-lg border border-sky-100 overflow-hidden">
                            <div className="bg-sky-50 px-4 py-3 border-b border-sky-100">
                                <h3 className="font-medium text-sky-800">Tarifs horaires de location</h3>
                            </div>
                            <div className="divide-y divide-sky-100">
                                <div className="px-4 py-3 flex justify-between items-center">
                                    <div>
                                        <p className="font-medium text-gray-700">Evektor Sportstar</p>
                                        <p className="text-xs text-gray-500">Biplace école</p>
                                    </div>
                                    <p className="font-semibold text-sky-700">111€/h</p>
                                </div>
                                <div className="px-4 py-3 flex justify-between items-center">
                                    <div>
                                        <p className="font-medium text-gray-700">Robin DR400 180cv</p>
                                        <p className="text-xs text-gray-500">Quadriplace voyage</p>
                                    </div>
                                    <p className="font-semibold text-sky-700">180€/h</p>
                                </div>
                                <div className="px-4 py-3 flex justify-between items-center">
                                    <div>
                                        <p className="font-medium text-gray-700">Robin DR400 160cv</p>
                                        <p className="text-xs text-gray-500">Quadriplace voyage</p>
                                    </div>
                                    <p className="font-semibold text-sky-700">180€/h</p>
                                </div>
                                <div className="px-4 py-3 flex justify-between items-center">
                                    <div>
                                        <p className="font-medium text-gray-700">Super guepard 100CV</p>
                                        <p className="text-xs text-gray-500">ULM biplace</p>
                                    </div>
                                    <p className="font-semibold text-sky-700">90€/h</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-sky-100 overflow-hidden">
                            <div className="bg-sky-50 px-4 py-3 border-b border-sky-100">
                                <h3 className="font-medium text-sky-800">Forfaits de location</h3>
                            </div>
                            <div className="divide-y divide-sky-100">
                                <div className="px-4 py-3">
                                    <p className="font-medium text-gray-700">Forfait 5 heures</p>
                                    <p className="text-sm text-gray-600">-5% sur le tarif horaire</p>
                                </div>
                                <div className="px-4 py-3">
                                    <p className="font-medium text-gray-700">Forfait 10 heures</p>
                                    <p className="text-sm text-gray-600">-8% sur le tarif horaire</p>
                                </div>
                                <div className="px-4 py-3">
                                    <p className="font-medium text-gray-700">Forfait 20 heures</p>
                                    <p className="text-sm text-gray-600">-12% sur le tarif horaire</p>
                                </div>
                            </div>
                        </div>
                    </TabsContent>


                    <TabsContent value="instruction" className="space-y-4">
                        <div className="rounded-lg border border-sky-100 overflow-hidden">
                            <div className="bg-sky-50 px-4 py-3 border-b border-sky-100">
                                <h3 className="font-medium text-sky-800">Tarifs instruction</h3>
                            </div>
                            <div className="divide-y divide-sky-100">
                                <div className="px-4 py-3 flex justify-between items-center">
                                    <p className="text-gray-700">Instruction en vol</p>
                                    <p className="font-semibold text-sky-700">24€/h</p>
                                </div>
                                <div className="px-4 py-3 flex justify-between items-center">
                                    <p className="text-gray-700">Cours théoriques</p>
                                    <p className="font-semibold text-sky-700">35€/h</p>
                                </div>
                                <div className="px-4 py-3 flex justify-between items-center">
                                    <p className="text-gray-700">Simulateur de vol</p>
                                    <p className="font-semibold text-sky-700">45€/h</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-sky-100 overflow-hidden">
                            <div className="bg-sky-50 px-4 py-3 border-b border-sky-100">
                                <h3 className="font-medium text-sky-800">Forfaits formation</h3>
                            </div>
                            <div className="divide-y divide-sky-100">
                                <div className="px-4 py-3">
                                    <div className="flex justify-between mb-1">
                                        <p className="font-medium text-gray-700">Forfait initiation</p>
                                        <p className="font-semibold text-sky-700">350€</p>
                                    </div>
                                    <p className="text-xs text-gray-500">3 heures de vol avec instructeur</p>
                                </div>
                                <div className="px-4 py-3">
                                    <div className="flex justify-between mb-1">
                                        <p className="font-medium text-gray-700">Pack PPL théorique</p>
                                        <p className="font-semibold text-sky-700">650€</p>
                                    </div>
                                    <p className="text-xs text-gray-500">Cours complet + supports + examens blancs</p>
                                </div>
                                <div className="px-4 py-3">
                                    <div className="flex justify-between mb-1">
                                        <p className="font-medium text-gray-700">Pack perfectionnement</p>
                                        <p className="font-semibold text-sky-700">550€</p>
                                    </div>
                                    <p className="text-xs text-gray-500">5 heures avec instructeur spécialisé</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-sky-100 overflow-hidden">
                            <div className="bg-sky-50 px-4 py-3 border-b border-sky-100">
                                <h3 className="font-medium text-sky-800">Coût total estimé</h3>
                            </div>
                            <div className="divide-y divide-sky-100">
                                <div className="px-4 py-3">
                                    <div className="flex justify-between mb-1">
                                        <p className="font-medium text-gray-700">Brevet ULM</p>
                                        <p className="font-semibold text-sky-700">~3 500€</p>
                                    </div>
                                    <p className="text-xs text-gray-500">Basé sur 25 heures de vol</p>
                                </div>
                                <div className="px-4 py-3">
                                    <div className="flex justify-between mb-1">
                                        <p className="font-medium text-gray-700">LAPL</p>
                                        <p className="font-semibold text-sky-700">~6 000€</p>
                                    </div>
                                    <p className="text-xs text-gray-500">Basé sur 30 heures de vol</p>
                                </div>
                                <div className="px-4 py-3">
                                    <div className="flex justify-between mb-1">
                                        <p className="font-medium text-gray-700">PPL</p>
                                        <p className="font-semibold text-sky-700">~9 000€</p>
                                    </div>
                                    <p className="text-xs text-gray-500">Basé sur 45 heures de vol</p>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>

                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-500 mb-4">
                        Pour plus d'informations ou pour des tarifs personnalisés, n'hésitez pas à nous contacter.
                    </p>
                    <Button className="bg-sky-600 hover:bg-sky-700 text-white">Nous contacter</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
